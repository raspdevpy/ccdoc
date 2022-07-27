# $arrayLoop

To loop over the array\
**Note:** Only zero-cooldown functions allowed in CODE

## Usage

```bash
$arrayLoop[varname]{
CODE...
}
```

### Example:
<discord-messages>
    <discord-message :bot="false" role-color="#ffcc9a" author="Member">
    !!exec $textSplit[Mido, Rake, Azz;, ]<br>
    $arrayLoop[name]{<br>
    Name is $name<br>
    }
    </discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
Name is Mido<br>
Name is Rake<br>
Name is Azz	</discord-message>
</discord-messages>


### Output:
