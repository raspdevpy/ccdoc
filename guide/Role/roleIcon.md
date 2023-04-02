# $roleIcon

Sets or return Role Icon in a guild

## Usage

```bash
$roleIcon[name/id;icon (optional)]
```

### Example 1 (Getting Role Icon):
```bash
$roleIcon[Support]
```
#### Output
![](https://i.imgur.com/d0PfOjB.png)



### Example 2: (Set Role Icon With Image)
```bash
$roleIcon[Member;https://cdn-icons-png.flaticon.com/512/6080/6080057.png]
```

### Example 3: (Set Role Icon With Custom EMoji)
```bash
$roleIcon[Member;<:happy:862641528890851328>]
```