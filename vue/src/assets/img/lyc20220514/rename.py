import os

path = r'C:\Users\ASUS\Desktop\album\album_vue_mysql\vue\src\assets\img\lyc20220514\thumbnail2'

for file in os.listdir(path):
    os.rename(os.path.join(path,file), os.path.join(path,'lyc20220514_'+file))


# os.rename(src, dst, *, src_dir_fd=None, dst_dir_fd=None)