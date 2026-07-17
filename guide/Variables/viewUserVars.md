# $viewUserVars

View a list of all the variables that are defined for a specific user

## Usage

```bash
$viewUserVars[User ID;Separator]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $viewUsersVars[$authorID]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        xp, money, bonus
        </discord-message>
</discord-messages>
