# $increaseUserVar

To increase user variable with a certain amount.\
If the variable doesn't exist it will be created and its value set to the answer of the value as if the original value of the var is 0.

## Usage

```bash
$increaseUserVar[variable name;amount/expression;user id;default amount (default is 0)]
```

### Example (increase user money by 1000):
```bash
$increaseUserVar[money;1000]


```

### Example (double the money):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec Before: $getUserVar[money]<br>$increaseUserVar[money;x*2]<br>After: $getUserVar[money]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Before: 1000<br>After: 2000
        </discord-message>
</discord-messages>
