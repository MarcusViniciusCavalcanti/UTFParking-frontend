export class User {
    userId?: number;
    name: string;
    accountNonExpired: boolean;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
    enabled: boolean;
    roles: Role[];
    type: string;
    _links?: Links;

    static isAdmin(roles: Role[]) {
        return roles.some(role => role.name === 'ROLE_ADMIN');
    }
}

export class Role {
    roleId: number;
    description: string;
    name: string;
}

export class Links {
    avatar: Href;
    me: Href;
    updateCar: Href;
    self: Href;
}

export class Href {
    href: string;
}
