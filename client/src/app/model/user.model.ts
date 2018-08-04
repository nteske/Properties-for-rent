export class User {
    constructor(
        public email:string,
        public password:string,
        public firstName?:string,
        public lastName?:string,
        public userName?:string,
        public phone?:string,
        public street?:string,
        public street2?:string,
        public avatar?:string,
        public admin?:number,
        public banned?:boolean,
    ) {}
}