export interface StaffDto {
  id: number,
  name: string,
  surname: string,
  price: number,
  job_title: string,
  image_id: string,
  url: string,
}

export interface ServiceShortDto {
  id: number,
  name: string,
  description: string,
  price: number,
  date: Date,
  image_id: number,
  staff_id: number,
  url: string,
  service_id: number,
}

export interface ServiceFullDto {
  id: number,
  service_name: string,
  description: string,
  service_price: number,
  date: Date | string,
  image_id: number,
  staff_id: number,
  url: string,
  name?: string,
  surname: string,
  staff_price?: number,
  job_title: string,
  staff_image_id?: number,
  staff_image_url?: string,
  user_id?: number,
}

export interface UserDto {
  id?: number,
  name: string,
  login: string,
  password: string,

  repPassword: string,
  surname: string,
  email: string,
}

export interface UserShortDto {
  login: string,
  password: string,
}

export interface RecordDto {
  id: number,
  created_at: Date | string,
  deleted_at: Date | string,
  date: Date | string,
  user_id: number,
  service_id: number,
  service_name?: string,
  master_name?: string,
  price?: string,
}

export interface SessionDto {
  id: number,
  createdA_a: Date | string,
  deleted_at: Date | string,
  user_id: number,
}
