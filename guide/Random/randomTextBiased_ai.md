# $randomTextBiased

Similar to [$randomText](./randomText.md), but with weighted randomness! This allows you to influence the probability of specific text being selected.

## Usage

```bash
$randomTextBiased[Text1,Weight1;Text2,Weight2;Text3,Weight3]
```

**Explanation:**

*   `Text1`, `Text2`, `Text3`: The text options you want to randomly select from.
*   `Weight1`, `Weight2`, `Weight3`:  Numerical values representing the weight or probability associated with each corresponding text option.  **Higher weight = Higher chance of selection.**

**Important:**

*   Separate each `Text,Weight` pair with a semicolon (`;`).
*   Weights don't need to add up to 100; they are relative to each other.

### Note:

The higher the weight a text option has, the more likely it is to be selected. For example, an item with a weight of 80 is much more likely to be chosen than an item with a weight of 2.

### Example: Reward Box with Varying Rarities

This example demonstrates a reward box system where the rarity of the reward is weighted.

**Command:**

```
!!exec Your reward is: $randomTextBiased[Common,80;Rare,10;Epic,8;Platinum,2] Box
```

**Explanation:**

*   `Common` has a weight of `80`, making it the most likely outcome.
*   `Rare` has a weight of `10`.
*   `Epic` has a weight of `8`.
*   `Platinum` has a weight of `2`, making it the least likely outcome.

**Possible Outcomes:**

Here are a couple of example scenarios demonstrating the range of possibilities:

**Example (Unlucky guy):**

<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec Your reward is: $randomTextBiased[Common,80;Rare,10;Epic,8;Platinum,2] Box<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Your reward is: Common Box<br><br>
        </discord-message>
</discord-messages>

**Example (Lucky guy):**

<discord-messages>
          <discord-message :bot="false" role-color="#ffcc9a" author="Member">
        !!exec Your reward is: $randomTextBiased[Common,80;Rare,10;Epic,8;Platinum,2] Box<br><br>
          </discord-message>
          <discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
        Your reward is: Epic Box
        </discord-message>
</discord-messages>