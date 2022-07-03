# $onlyIf
Continue execution only if certain condition is satisfied, else send error message
In theory $onlyif can replace all other $onlyFor with the proper condition
#### Usage: `$onlyif[Condition;error message]`

#### Example: `$onlyIf[$username==Mido;You are not mido]`

::: tip Note
You can send embed using [Message Curl Format](../../CodeReferences/ref.message_curl_format.md)
:::

##### Function Difficultly: <Badge type="warning" text="Medium" vertical="middle" /> 
###### Tags: <Badge type="tip" text="Only If" vertical="middle" /> <Badge type="tip" text="Conditional restriction" vertical="middle" /> <Badge type="tip" text="Only Execute if" vertical="middle" />