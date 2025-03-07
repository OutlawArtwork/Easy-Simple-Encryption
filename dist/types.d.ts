declare function useEncryption(): {
    encrypt: (text: string) => Promise<string>;
    decrypt: (text: string) => Promise<string>;
};

declare const secret: (key: string) => void;
declare const encrypt: (text: string) => Promise<string>;
declare const decrypt: (text: string) => Promise<string>;

export { decrypt, encrypt, secret, useEncryption };
