import os
import re
import shutil

path           = r'C:\Users\bimar\Desktop\TestFolder'
dest           = r'C:\Users\bimar\Desktop\TestDest'
existing_files = r'C:\Users\bimar\Desktop\copied_file.txt'
dir_to_check   = 'Sales-UCO_BrownGr_YellowGr_UsedOil'

regexp = re.compile(r'\[printed_[a-zA-Z]*\].txt')

existing_files_list = []
copied_files        = []

file = open(existing_files, 'r')

for line in file:
    existing_files_list.append(line.replace('\n', ''))

file.close()

os.chdir(path)

for root_item in os.listdir():
    loc = os.path.join(path, root_item)
    path_to_check = os.path.join(loc, dir_to_check)

    if os.path.isdir(loc) and os.path.exists(path_to_check):
        for root, dirs, files in os.walk(path_to_check):
            for file in files:
                if regexp.search(file) and (file not in existing_files_list):
                    file_path = os.path.join(path_to_check, file)

                    shutil.copy(file_path, dest)

                    copied_files.append(file)

file = open(existing_files, 'a')

for line in copied_files:
    file.write(line + '\n')

file.close()
