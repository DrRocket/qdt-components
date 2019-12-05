# QdtTable: *Create an Interactive Table*

![QdtTable](../assets/table.png "QdtTable")


## Properties

| prop             | type          | description            |
| ---------------- | ------------- | -------------          |
| cols             | Array         | `[dimension, measure]` |
| height           | Number        | `400`                  |
| rowHeight        | Number        | `40`                   |

## Code 

### Vanilla JavaScript

### React

```jsx
<QdtComponent
  type='QdtTable'
  props={{
    cols: [
      'Case Owner',
      'Employee Status',
      "=Count( {$<Status -={'Closed'} >} Distinct %CaseId )",
    ],
    height: 400,
    rowHeight: 40,
  }}
/>
```

### Angular

## Examples

#### [Live](https://qdt-apps.qlik.com/qdt-components/react/#/table-engine)

---

[← Back to All Components](https://github.com/qlik-demo-team/qdt-components#components)