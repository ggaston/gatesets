import Koa from 'koa'
import { setWorkflow } from "api/workflow"

const app = new Koa();

app.use(async ctx => {
    const workflow = setWorkflow('Hello World')
    ctx.body = workflow;
});

app.listen(3000, () => {
  console.log('Koa is running on port: 3000')
})