export class PhotosResponse {
  photos: Photos | null = null
}

export class Photos {
  photo: Array<Photo> = []
}

export class Photo {
  id: string
  owner: string = ""
  secret: string
  server: string
  farm: number
  title: string
  ispublic: number = -1
  isfriend: number = -1
  isfamily: number = -1

  constructor(
    id: string,
    secret: string,
    server: string,
    farm: number,
    title: string,
  ) {
    this.id = id
    this.title = title
    this.farm = farm
    this.server = server
    this.secret = secret
  }
}
