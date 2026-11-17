import './app.css'
import { Schema } from 'effect'
import { Runtime, Update } from 'foldkit'
import { Document, Html, HtmlBuilder } from 'foldkit/html'
import { defineMessageUnion } from 'foldkit/message'

export const Model = Schema.Struct({ count: Schema.Number, dark: Schema.Boolean })
export type Model = typeof Model.Type
export const Message = defineMessageUnion({
  ClickedIncrement: {},
  ClickedDecrement: {},
  ClickedReset: {},
  ClickedTheme: {},
})
export type Message = typeof Message.Type
export const init: Runtime.ApplicationInit<Model, Message> = () => ({ model: { count: 0, dark: false } })
export const update = (model: Model, message: Message) =>
  Message.match<Update.Return<Model, Message>>(message, {
    ClickedIncrement: () => ({ model: { ...model, count: model.count + 1 } }),
    ClickedDecrement: () => ({ model: { ...model, count: model.count - 1 } }),
    ClickedReset: () => ({ model: { ...model, count: 0 } }),
    ClickedTheme: () => ({ model: { ...model, dark: !model.dark } }),
  })

const button = (h: HtmlBuilder<Message>, className: string, label: string, message: Message): Html =>
  h.button([h.OnClick(message), h.Class(className)], [label])

export const view = (model: Model, h: HtmlBuilder<Message>): Document => ({
  title: 'Counter',
  body: h.div(
    [h.Class(model.dark ? 'page dark' : 'page')],
    [h.div(
      [h.Class('card')],
      [
        h.div([h.Class('title')], ['Counter']),
        h.div([h.Class('count')], [`${model.count}`]),
        h.div(
          [h.Class('actions')],
          [
            button(h, 'button', '-', Message.ClickedDecrement()),
            button(h, 'button primary', '+', Message.ClickedIncrement()),
            button(h, 'button', 'Reset', Message.ClickedReset()),
          ],
        ),
        button(h, 'button', model.dark ? 'Light theme' : 'Dark theme', Message.ClickedTheme()),
      ],
    )],
  ),
})
