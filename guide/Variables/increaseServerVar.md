# $increaseServerVar

To increase server variable with a certain amount.\
If the variable doesn't exist it will be created and its value set to the answer of the value as if the original value of the var is 0.

## Usage

```bash
$increaseServerVar[variable name;amount/expression;default amount (default is 0)]
```

### Example (increase ticket numbers by 1):
```bash
$increaseServerVar[ticket numbers;1]


```

### Example (double the messages):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec Before: $getServerVar[ticket numbers]<br>$increaseServerVar[ticket numbers;x*2]<br>After: $getServerVar[ticket numbers]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Before: 5<br>After: 10
        </discord-message>
</discord-messages>
