# Gatesets

## Description

In short: Chained todo's for stuff. Or in other words Kanban board for physical items.

A typical workflow:

1. Select a **gate**
2. Scan an **item** QR, barcode code
3. Automaticaly trigger action (webhook) for newly added items

**Gates** can hold multiple items. Specific item (or group of items) can move from one gate to another.  Behavior same as on Kanban board. Usually Kanban entries represents tasks, here are physical items. 

## Steps

1. Try to build with [n8n](https://n8n.io/) or other already existing tools. 
    However I can see several key features which MUST be available to make work.
    1. Usually moving item in one step is required (from previous to next gate only). Not through complete workflow. 
    1. Also trigger workflow only on specific node and skip the rest of workflow
    1. Connect other workflows (e.g. [n8n](https://n8n.io/)) to individual nodes 

2. Build on (Redis)[https://redis.io/] ((LocalStorage)[https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage]) + (Koa)[https://koajs.com/] + (React)[https://reactjs.org/] stack
    

