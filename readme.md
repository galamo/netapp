# NetApp

# Conditional Rendering

# Ex-1:

```typescript
// Here types should remain the same ❄
type Config = {
  exportCsv: boolean;
  showTableInUI: boolean;
};
type Data = {
  csvData?: string;
  tableData?: string;
};

function getRows(config: Config): Data;
```

# Solution Ex-1

```typescript
type Config = {
  exportCsv: boolean;
  showTableInUI: boolean;
};
type Data = {
  csvData?: string;
  tableData?: string;
};

declare function getData(config: {
  name: true;
  lastname: false;
}): Pick<Required<User>, "name">;

declare function getUser(config: {
  name: false;
  lastname: true;
}): Pick<Required<User>, "lastname">;

declare function getUser(config: { name: false; lastname: false }): {};

declare function getUser(config: {
  name: true;
  lastname: true;
}): Required<User>;
```
