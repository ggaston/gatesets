## Process graph

```mermaid
graph TD
L1[C/R/U/D Workflow]-->L21[C/R/U/D Gate]
L21-->L31[C/R/U/D Item]-->41[Scan Item]
L31-->L51[Write-in item]
L21-->L34[Move Item/s to next gate]
L21-->L23[Dispatch Gate action]-->l51[Connect external webhook]


```

## Value Objects

### Workflow

#### Description
Workflow as a collection of **Gates**.


### Gate
#### Description
Gate as a collection of **Items**.

### Item
#### Description
Item as a collection of **Gates**.