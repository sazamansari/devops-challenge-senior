variable "region" {
  type    = string
  default = "us-east-1"
}

variable "name_prefix" {
  type    = string
  default = "simple-timeservice"
}

variable "container_image" {
  type    = string
  default = "shadab1995/devops-challenge-senior:latest"
}


variable "container_port" {
  type    = number
  default = 3000
}

variable "desired_count" {
  type = number
  default = 2
}
