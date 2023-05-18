# $viewServerVars

Get list of defined server variables, and optionally filter then using query regex

## Usage

```bash
$viewUserVars[User ID;Separator;Query Regex (optional)]
```

### Example:
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $viewServerVars[$authorID]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        level1_xp, names, staffs, level2_xp, level3_xp, level1_reward<br><br>
        </discord-message>
</discord-messages>

### Example (return only variables that starts with level):
<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec $viewServerVars[$authorID;^level]<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        level1_xp, level2_xp, level3_xp,level1_reward
        </discord-message>
</discord-messages>