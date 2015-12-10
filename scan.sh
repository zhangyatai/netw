#! /bin/bash

interface=$1

scancmd='iwlist'

if [[ $(which "$scancmd")  ]]; then

#nets=$($scancmd $interface scan)
nets='dss'

  echo "[$nets]"


else

  echo '[]'

fi
