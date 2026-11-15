import { Schema } from 'effect'
import { Runtime, Update } from 'foldkit'
import { Document, HtmlBuilder } from 'foldkit/html'
import { defineMessageUnion } from 'foldkit/message'
import { HoverStyle } from '@silkui/foldkit'

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
    [
      h.Style({
        position: 'absolute',
        inset: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(250, 250, 250)',
        fontFamily: 'sans-serif',
      }),
    ],
    [
      h.div(
        [
          h.OnClick(Message.ClickedButton()),
          HoverStyle({ backgroundColor: 'rgb(59, 130, 246)' }),
          h.Style({
            paddingTop: '12px',
            paddingBottom: '12px',
            paddingLeft: '20px',
            paddingRight: '20px',
            borderRadius: '10px',
            backgroundColor: 'rgb(37, 99, 235)',
            color: 'white',
            fontSize: '18px',
          }),
        ],
        [`Clicked ${model.clicks} time${model.clicks === 1 ? '' : 's'}`],
      ),
    ],
  ),
})
