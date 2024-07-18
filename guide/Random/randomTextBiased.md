# $randomTextBiased

same as [$randomText](./randomText.md) but with biased random

## Usage

```bash
$randomTextBiased[Text1,Weight1;Text2,Weight2;Text3,Weight3]
```

### Note:
The more weight a text has, the more likely it is to be selected

### Example (Unlucky guy):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec Your reward is: $randomTextBiased[Common,80;Rare,10;Epic,8;Platinum,2] Box<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Your reward is: Common Box<br><br>
        </discord-message>
</discord-messages>

### Example (Lucky guy):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec Your reward is: $randomTextBiased[Common,80;Rare,10;Epic,8;Platinum,2] Box<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Your reward is: Epic Box
        </discord-message>
</discord-messages>
