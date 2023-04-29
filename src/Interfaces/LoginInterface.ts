export interface IPhone {
    code             :   number;
    prefix           :   string;
    phone_number     :   number;
    expiration_date  :   Date;
    verified         :   boolean;
    createdAt       ?:   Date;
    updatedAt       ?:   Date;
}
export interface ICustomer {
    _id              :   string;
    fullname         :   string;
    privacity        :   boolean;
    email            :   string;
    password        ?:   string;
    stripe_customer ?:   string;
    profile_image   ?:   string;
    type_customer    :   string;
    google          ?:   Boolean;
    phone            :   IPhone;
    status          ?:   Boolean;
    facturapi_id    ?:   string;
    ine             ?:   string;
    curp            ?:   string;
    prook_address   ?:   string;
    criminal_record ?:   string;
    createdAt        :   Date;
    updatedAt        :   Date;
}

export interface IAuthCustomer {
    user    : ICustomer;
    token   : string;
    logged  : boolean;
}

export interface ICustomerData {
    user        :   ICustomer;
    message    ?:   string;
}

export interface ICustomerResponse {
    data        :   ICustomer;
    message    ?:   string;
}