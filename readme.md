# Gatesets

## Initial idea for tool

Tool for managing creator workflow. Map production process to important milestones (**Gates**). During production items flows through gates. Each gate can start action on individual item (think of e.g. sending email, or post on )  

## Basic characteristics

- Workflows as a journey through gates.
- Each gate can hold a set of items.
- Something like simplicistic Kanban board.

## Goals

System should very similar to [n8n](https://n8n.io/) workflow automation platform. Each **Gate** can be represented as table of items e.g. [Airtable node](https://n8n.io/integrations/n8n-nodes-base.airtable)

with focus on automatic or bulk gate to gate transitions.

Difference from **n8n** here is, that Gates apart from **n8n nodes** can hold multiple items, can move them individually. You can think about 

## Key features

- Items can be physical items, connect with QR codes or NFC. Moving from gate to gate provides QR code scanning or NFC reading (writing)
- Allow define specific actions or workflow for each gate. When item is moving to gate start some process or flow in the sense of [n8n](https://n8n.io/) workflow automation.  

## Other features

- Predictions. Set benchmark for desired Basically plan your gates 
- Statistics for avg throughput etc.
- Other metrics?

## Roadmap

1. Try to build with [n8n](https://n8n.io/) or other already existing tools. 
    However I can see several key features which MUST be available to make work.
    1. Usually moving item in one step is required (from previous to next gate only). Not through complete workflow. 
    1. Also trigger workflow only on specific node and skip the rest of workflow
    1. Connect other workflows (e.g. [n8n](https://n8n.io/)) to individual nodes 
    

