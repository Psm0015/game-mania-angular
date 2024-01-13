export class Produto{
    id!: number
    titulo!: string
    preco!: number
    imgPath!:string

    constructor(id:number, titulo:string, preco:number, imgPath:string){
        this.id = id
        this.titulo = titulo
        this.preco = preco
        this.imgPath = imgPath
    }

}