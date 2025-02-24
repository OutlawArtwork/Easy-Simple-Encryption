# React - Easy Simple Encryption

> Easily add simple encryption / decryption to React and Nextjs applications.

## Table of contents

- [Project Name](#project-name)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [useEncryption](#useEncryption)
    - [encrypt](#encrypt)
    - [decrypt](#decrypt)
  - [Versioning](#versioning)
  - [Authors](#authors)

## Installation

To install the library, run:

```sh
$ npm i easy-simple-encryption
```

## Usage

### useEncryption

The hook that can be used from any React Component.
The hook uses async calls.

Usage:

```ts
useEncryption();
```

### encrypt

Usage:

```ts
encrypt("text").then((result) => result);
```

Options:

`text` (Required)

| Type   | value  | Description                |
| ------ | ------ | -------------------------- |
| string | "text" | The string to be encrypted |

Example:

```tsx
import { useEncryption } from "easy-simple-encryption";

function MyComponent() {
  const { encrypt, decrypt } = useEncryption();

  // on submit
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const password = await encrypt("some password");
  }

  // in a component
  return (
    <div>
      <p>{encrypt("some text to encrypt").then((result) => result)}</p>
      <button onClick={onSubmit}>
    </div>
  );
}
export default MyComponent;
```

### decrypt

Usage:

```ts
decrypt("encrypted_key").then((result) => result);
```

Options:

`encrypted_key` (Required)

| Type   | value           | Description             |
| ------ | --------------- | ----------------------- |
| string | "encrypted_key" | The key to be decrypted |

Example:

```tsx
import { useEncryption } from "easy-simple-encryption";

function MyComponent() {
  const { encrypt, decrypt } = useEncryption();

  // on submit
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const password = await decrypt("some encrypted key");
  }

  // in a component
  return (
    <div>
      <p>{encrypt("some encrypted key").then((result) => result)}</p>
      <button onClick={onSubmit}>
    </div>
  );
}
export default MyComponent;
```

## Versioning

- 1.2.0

## Authors

- **Wallace Krumrei** - [WallaceKrumrei](https://github.com/OutlawArtwork)
