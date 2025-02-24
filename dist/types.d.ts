declare function useEncryption(): {
    encrypt: (text: string) => Promise<string>;
    decrypt: (text: string) => Promise<string>;
};

export { useEncryption };
