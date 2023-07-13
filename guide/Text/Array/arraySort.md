# $arraySort

Sorts an array, created with [$textSplit](../textSplit/textSplit.md).
Can be sorted numerically or alphabetically, or depending on occurrences.

## Usage

```bash
$arraySort[Ascending (yes/no, default is no);Sort Type;array name (optional)]
```

### Sort Types:
`num`: Sort Numerically\
`alpha`: Sort Alphabetically\
`frequent`: Sort By how many element got repeated

### Example (Sort Occurrences):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $textSplit[3.Mido<br>1.Azz<br>2.Rake<br>2.Rake<br>3.Mido<br>3.Mido<br>4.Finkz;<br>]<br>$arraySort[no;frequent]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        The sorted list is<br>3.Mido<br>2.Rake<br>4.Finkz<br>1.Azz<br><br>
        </discord-message>
</discord-messages>

### Example (Sort Numerically):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $textSplit[1. Azz<br>3.Mido<br>2.Rake<br>4.Finkz;<br>]<br>$arraySort[yes;num]<br>The sorted list is<br>$arrayJoin[<br>]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        The sorted list is<br>1. Azz<br>2.Rake<br>3.Mido<br>4.Finkz<br><br>
        </discord-message>
</discord-messages>

### Example (Sort Alphabetically):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $textSplit[3.Mido<br>1.Azz<br>2.Rake<br>4.Finkz;<br>]<br>$arraySort[yes;alpha]<br>The sorted list is<br>$arrayJoin[<br>]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        The sorted list is<br>1. Azz<br>4.Finkz<br>3.Mido<br>2.Rake
        </discord-message>
</discord-messages>