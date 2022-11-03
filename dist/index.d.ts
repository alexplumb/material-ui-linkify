/// <reference types="react" />
/// <reference types="linkify-it" />
declare module "components/MuiLinkify" {
    import React from 'react';
    import LinkifyIt from 'linkify-it';
    const MuiLinkify: React.FunctionComponent<{
        children: React.ReactNode;
        schema?: LinkifyIt.SchemaRules;
        options?: LinkifyIt.Options;
        includeTLDs?: boolean;
        hostnameOnly?: boolean;
        hostnameSchemas?: string[];
        LinkProps?: any;
    }>;
    export default MuiLinkify;
}
declare module "index" {
    import MuiLinkify from "components/MuiLinkify";
    export default MuiLinkify;
}
declare module "demo/components/App" {
    const _default: () => JSX.Element;
    export default _default;
}
declare module "demo/index" {
    const _default_1: void;
    export default _default_1;
}
//# sourceMappingURL=index.d.ts.map