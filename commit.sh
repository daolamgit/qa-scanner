#!/bin/bash

usage="Usage: ./commit.sh <MESSAGE>"

if [ $# -eq 0 ]
then
  printf "Enter a commit message.\n"
  echo $usage

  exit
fi

if [ $# -gt 1 ]
then
  printf "Invalid arguments.\n"
  echo $usage

  exit
fi

git add .
git commit -m "$1"
git push origin master

exit
