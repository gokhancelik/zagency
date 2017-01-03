import { Role } from './../shared/models/role.model';
import { User } from './../shared/models/user.model';
export class CurrentUser extends User {
    static fromJson({ $key, name, phone, userName, email, company, role }): CurrentUser {
        return new CurrentUser(
            $key, name, phone, userName, email, company, role);
    }
    static fromJsonList(array): CurrentUser[] {
        return array.map(CurrentUser.fromJson);
    }
    constructor(id: string = null,
        name: string = null,
        phone: string = null,
        userName: string = null,
        email: string = null,
        company: string = null,
        role: string = null,
        public roleName: string = null) {

        super(id,name, phone, userName, email, company, role);

    }
}