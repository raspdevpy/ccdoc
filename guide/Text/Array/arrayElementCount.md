# $arrayElementCount

This function is used to count the number of times a specific element appears in an array.\
 It takes three parameters: the element to count, whether or not to trim whitespace before comparing elements, and the name of the array to search

## Usage

```bash
$arrayElementCount[Element To Count;Trim before compare (yes/no);array name]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $arrayCreate[Mido/Rake/Mido/Rake/Rake/Azz/Faj;/]<br>Rake repeated $arrayElementCount[Rake] times<br>Mido repeated $arrayElementCount[Mido] times<br>Azz repeated $arrayElementCount[Azz] times<br>Faj repeated $arrayElementCount[Faj] times<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Rake repeated 3 times<br>Mido repeated 2 times<br>Azz repeated 1 times<br>Faj repeated 1 times
        </discord-message>
</discord-messages>