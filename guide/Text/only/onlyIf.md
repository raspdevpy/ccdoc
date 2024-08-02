# $onlyIf
Continue the execution only if certain [expression](../../CodeReferences/ref.expression.md) is satisfied, otherwise stop the execution and send the error message.
In theory $onlyif can replace all other $onlyFor with the proper [expression](../../CodeReferences/ref.expression.md)
#### Usage: `$onlyif[Expression;error message]`

#### Example: `$onlyIf[$username==Mido;You are not mido]`

::: tip Note
Read about [Expression](../../CodeReferences/ref.expression.md)
:::

::: tip Note
You can send embed using [Message Curl Format](../../CodeReferences/ref.message_curl_format.md)
:::

##### Function difficulty <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Only If" vertical="middle" /> <Badge type="tip" text="Conditional restriction" vertical="middle" /> <Badge type="tip" text="Only Execute if" vertical="middle" />
