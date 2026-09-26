import glob
import re

images = [f"/images/IMG_{i:04d}.jpg" for i in range(118, 137)]

files = glob.glob("src/sections/*.tsx")

img_idx = 0
for f in files:
    with open(f, "r") as file:
        content = file.read()
    
    # We will replace import X from '../assets/images/cover/building-placeholder.svg';
    # with const X = '/images/IMG_XXXX.jpg';
    
    def repl(m):
        global img_idx
        var_name = m.group(1)
        res = f"const {var_name} = '{images[img_idx]}';"
        img_idx += 1
        return res

    content, n = re.subn(r"import\s+(\w+)\s+from\s+'../assets/images/cover/building-placeholder\.svg';", repl, content)
    
    if n > 0:
        with open(f, "w") as file:
            file.write(content)

