# $resetRandom

The `$resetRandom` function clears the stored seed used by the `$random` function, effectively resetting the random number generator. This means that subsequent calls to `$random` will generate a new sequence of random numbers, potentially different from the previous sequence before the reset.  This is useful when you want to ensure a fresh set of random numbers.

### Usage: `$resetRandom`

**Explanation:**

When you use `$random` multiple times without resetting, it might produce the same number due to how it's seeded. `$resetRandom` ensures each subsequent `$random` call behaves truly randomly by clearing that internal seed.

**Example:**

```html
<discord-messages>
	<discord-message :bot="false" role-color="#ffcc9a" author="Member">
		!!exec Number:$random[1;6]
               Number:$random[1;6]
        $resetRandom after reset
        $random[1;6]
	</discord-message>
	<discord-message :bot="true" role-color="#0099ff" author="Custom Command" avatar="https://media.discordapp.net/avatars/725721249652670555/781224f90c3b841ba5b40678e032f74a.webp">
		Number:5
 Number:5
  after reset
 1
	</discord-message>
</discord-messages>
```

**Breakdown of the Example:**

1.  `Number:$random[1;6]` is called twice *before* the reset.  In this example, the same number `5` is generated for both calls. *Note: The actual number generated here is random and will vary.*
2. `$resetRandom after reset` resets the random seed.  The text "after reset" is just literal text included for explanation.
3. `$random[1;6]` is called again *after* the reset. It now generates a new, potentially different random number (in this example, it's `1`).

##### Function difficulty: <Badge type="tip" text="Easy" vertical="middle" />