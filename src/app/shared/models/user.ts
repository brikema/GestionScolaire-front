export class User {
    id!: number;
    name!: string;
    roles: string;
    constructor(id:number,name:string,roles:string){
        this.id = id;
        this.name = name;
        this.roles = roles;
    }
}