import './app.css'
import { Schema } from 'effect'
import { Runtime, Update } from 'foldkit'
import { Document, HtmlBuilder } from 'foldkit/html'
import { defineMessageUnion } from 'foldkit/message'

export const Model = Schema.Struct({ clicks: Schema.Number })
export type Model = typeof Model.Type
export const Message = defineMessageUnion({ ClickedButton: {} })
export type Message = typeof Message.Type
export const init: Runtime.ApplicationInit<Model, Message> = () => ({ model: { clicks: 0 } })
export const update = (model: Model, message: Message) =>
  Message.match<Update.Return<Model, Message>>(message, {
    ClickedButton: () => ({ model: { clicks: model.clicks + 1 } }),
  })

export const view = (model: Model, h: HtmlBuilder<Message>): Document => ({
  title: 'Counter',
  body: h.div(
    [h.Class('absolute inset-0 flex items-center justify-center bg-slate-50 font-sans')],
    [h.button(
      [
        h.OnClick(Message.ClickedButton()),
        h.Class('counter-button rounded-lg bg-blue-600 px-5 py-3 text-lg text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-blue-500'),
      ],
      [`Clicked ${model.clicks} time${model.clicks === 1 ? '' : 's'}`],
    )],
  ),
})
