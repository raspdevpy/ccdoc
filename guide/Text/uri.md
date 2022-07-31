# $uri

Decodes or Encodes a url Example when you encode a url 'hello world' = 'hello%20world'

## Usage

```bash
$uri[decode/encode;text]
```

### Example (Encoding):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $uri[encode;Hello World]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Hello%20World<br><br>
        </discord-message>
</discord-messages>

### Example (Decoding):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $uri[decode;Hello%20World]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Hello World
        </discord-message>
</discord-messages>