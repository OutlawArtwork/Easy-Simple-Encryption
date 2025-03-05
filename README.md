# React - Easy Simple Encryption

> Easily add simple encryption / decryption to React and Nextjs applications.

## Table of contents

- [Easy Encryption](#project-name)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [useEncryption Hook](#useEncryption)
    - [encrypt function](#encrypt-function)
    - [decrypt function](#decrypt-function)
  - [Versioning](#versioning)
  - [Authors](#authors)

## Installation

To install the library, run:

```sh
$ npm i easy-simple-encryption
```

## Usage

### useEncryption

The hook that can be used from any client side component.
The hook uses async calls.

Usage:

```ts
const { encrypt, decrypt } = useEncryption();
```

### encrypt

Usage:

```ts
encrypt("text");
```

Options:

`text` (Required)

| Type   | value  | Description                |
| ------ | ------ | -------------------------- |
| string | "text" | The string to be encrypted |

Example:

> outputs: 4330776p5k6l24246779624o

```tsx
import { useEncryption } from "easy-simple-encryption";

function MyComponent() {
  const { encrypt } = useEncryption();

  // on async call
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const password = await encrypt("S0mePa$$worD");
  }

  return (
    <div>
      <button onClick={onSubmit}>
    </div>
  );
}
export default MyComponent;
```

### decrypt

Usage:

```ts
decrypt("encrypted_key");
```

Options:

`encrypted_key` (Required)

| Type   | value           | Description             |
| ------ | --------------- | ----------------------- |
| string | "encrypted_key" | The key to be decrypted |

Example:

> outputs S0mePa$$worD

```tsx
import { useEncryption } from "easy-simple-encryption";

function MyComponent() {
  const { decrypt } = useEncryption();

  // on submit
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const password = await decrypt("4330776p5k6l24246779624o");
  }

  return (
    <div>
      <button onClick={onSubmit}>
    </div>
  );
}
export default MyComponent;
```

### encrypt function

This function can be used on server side components.

Usage:

```ts
encrypt("text");
```

Options:

`text` (Required)

| Type   | value  | Description                |
| ------ | ------ | -------------------------- |
| string | "text" | The string to be encrypted |

Example:

```ts
"use server";
import { encrypt, decrypt } from "easy-simple-encryption";

export const login = async (
  details: Authentication
): Promise<AuthenticationResult> => {
  const { password } = details;

  const account: UserAccount = await checkAccount(await encrypt(password));
  if (account.error) {
    return {
      result: AUTHPAGERESULT.FAIL,
    };
  }

  return {
    result: AUTHPAGERESULT.SUCCESS,
  };
};
```

### decrypt function

This function can be used on server side components.

Usage:

```ts
decrypt("text");
```

Options:

`encrypted_key` (Required)

| Type   | value           | Description             |
| ------ | --------------- | ----------------------- |
| string | "encrypted_key" | The key to be decrypted |

Example:

```ts
"use server";
import { encrypt, decrypt } from "easy-simple-encryption";

export const login = async (
  details: Authentication
): Promise<AuthenticationResult> => {
  const { email, password } = details;

  const account: UserAccount = await getAccount(email);
  const auth = await decrypt(account.password);
  if (auth !== password) {
    return {
      result: AUTHPAGERESULT.FAIL,
    };
  }

  return {
    result: AUTHPAGERESULT.SUCCESS,
  };
};
```

## Versioning

- 1.0.3
- 1.0.2
- 1.0.1
- 1.0.0

## Authors

- **Wallace Krumrei** - [WallaceKrumrei](https://github.com/OutlawArtwork)
