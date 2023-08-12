import  {
    createGrpcWebTransport,
}  from "@bufbuild/connect-web";

import {createPromiseClient, PromiseClient} from "@bufbuild/connect";

import {ServiceType} from "@bufbuild/protobuf";

export class Base<T> {
    constructor() {return}

    getClient<T extends ServiceType>(service: T): PromiseClient<T> {
        const transport = createGrpcWebTransport({
            baseUrl: "http://localhost:9000"
        });
        return createPromiseClient(service, transport);
    }
}
