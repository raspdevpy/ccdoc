# $randomTextBiased

same as [$randomText](./randomText.md) but with biased random

## Usage

```bash
$randomTextBiased[Text1,Percentage1;Text2,Percentage2;Text3,Percentage3]
```

### Note:
Percentages must sum up to 100, the more percentage for text, the more likely it will be selected

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