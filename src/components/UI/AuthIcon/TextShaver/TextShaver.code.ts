import { defineComponent, PropType, ref } from 'vue';

export default defineComponent({
  name: 'TocoShavedText',
  // ***********************************************************************
  // Props
  props: {
    /**
     * Исходный текст
     */
    text: {
      type: String,
      required: true,
      default: () => '',
    },

    /**
     * Внешний признак отображения текста: true - показывать побритый, false - полный
     * (игнорируется, если задан showToggle = true);
     */
    isShaved: {
      type: Boolean,
      default: () => undefined,
    },

   maxHeight: {
     type: Number,
     required: true,
   },

    /**
     * Строка, которая будет добавляться к обрезанному тексту;
     */
    shavedSymbol: {
      type: String,
      default: () => '...',
    },
  },

  // ***********************************************************************
  // Emits
  emits: {
    'update:shavedStatus': null,
  },

  setup() {
    const shavedTextElementRef = ref<HTMLElement>();
    return {
      shavedTextElementRef,
    }
  },

  data: () => ({
    localShaveStatus: false,
    shavedText: '',
  }),

  // ***********************************************************************
  // Computed
  computed: {
    // Признак, что текст был обрезан
    isTextShaved(): boolean {
      return this.text !== this.shavedText;
    },

    // Элемент __original-text присваивается на этапе начального рендеринга и сохраняется
    // когда текст не шейвится (весь текст полностью помещается в заданную высоту/ширину элемента)
    shavedTextElementClasses(): Record<string, boolean> {
      return {
        'shaved-text__original-text': !this.isTextShaved,
      };
    },
  },

  // ***********************************************************************
  // LifeCycle Hooks
  created(): void {
    this.shavedText = this.text;
  },

  mounted() {
    this.calculation();
  },

  // ***********************************************************************
  // Methods
  methods: {

    // Метод непосредственного вычисления и инжектирования текста в DOM-элемент
    calculation(): void {
      // Если мы на сервере, обрезку выполнить нельзя
      if (!this.shavedTextElementRef) {
        this.shavedText = this.text;
        return;
      }
      this.shavedTextElementRef.textContent = this.text;
      const words = this.text.split(' ');
      const height = this.shavedTextElementRef.style.height;
      const maxHeight = this.shavedTextElementRef.style.maxHeight;
      this.shavedTextElementRef.style.height = 'auto';
      this.shavedTextElementRef.style.maxHeight = 'none';

      // Если задана максимальная ширина - обрезку выполняем по ширине, иначе - по высоте

      // Если текущий текст меньше 2-х слов или уже помещается в максимальную высоту, обрезку не выполняем
      if (words.length < 2 || this.shavedTextElementRef.offsetHeight <= this.maxHeight) {
        this.shavedTextElementRef.style.height = height;
        this.shavedTextElementRef.style.maxHeight = maxHeight;
        this.shavedText = this.text;
        return;
      }

      // Находим слово, на котором нужно остановиться методом двоичного поиска
      let minWord = 0;
      let maxWord = words.length - 1;
      let currentWord;

      while (minWord < maxWord) {
        currentWord = Math.floor((minWord + maxWord + 1) / 2);
        this.shavedTextElementRef.textContent = words.slice(0, currentWord).join(' ') + this.shavedSymbol;
        if (this.shavedTextElementRef.offsetHeight > this.maxHeight) {
          maxWord = currentWord - 1;
        } else {
          minWord = currentWord;
        }
      }
      // Если вдруг отрезали все слова, а текст так и не поместился,
      // то возвращаем первое слово
      maxWord = maxWord !== 0 ? maxWord : 1;

      // Записываем итоговое значение обрезанного текста
      this.shavedTextElementRef.textContent = this.shavedText =
        words.slice(0, maxWord).join(' ').trim() + this.shavedSymbol;
      this.shavedTextElementRef.style.height = height;
      this.shavedTextElementRef.style.maxHeight = maxHeight;
      this.localShaveStatus = true;
    },
  },
});
