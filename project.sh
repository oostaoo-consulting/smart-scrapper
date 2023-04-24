#!/bin/sh

# This file is used to start, stop and purge the project

PROJECT_URL="http://localhost:3000"

START_COMMAND="docker-compose up app"
STOP_COMMAND="docker-compose stop"
PURGE_COMMAND="docker-compose down"

MENU=(
  "Start: mount docker containers and start the project" 
  "Stop: stop docker containers and the project" 
  "Purge: delete docker containers" 
  "Exit: exit this menu"
)

function up(){
    echo "****** 🔄 Starting all containers ***********"
    $START_COMMAND
    echo
    echo "****** ✅ Project started at $PROJECT_URL ***"
    echo
}

function stop(){
    echo "****** 🔄 Stoping all containers ************"
    $STOP_COMMAND
    echo
    echo "****** ⏸ All containers stoped *************"
    echo
}

function down(){
    echo "****** 🔄 Purge all containers **************"
    $PURGE_COMMAND
    echo
    echo "****** ⏹ All containers deleted ************"
    echo
}


function exec_choice(){
  case "$menu_result" in
    "0")
        up
        break
        ;;
    "1")
        stop
        break
        ;;
    "2")
        down
        break
        ;;
    "3")
        exit
        break
        ;;
  esac
}

function select_option (){
    # little helpers for terminal print control and key input
    ESC=$( printf "\033")
    cursor_blink_on()  { printf "$ESC[?25h"; }
    cursor_blink_off() { printf "$ESC[?25l"; }
    cursor_to()        { printf "$ESC[$1;${2:-1}H"; }
    print_option()     { printf "   $1 "; }
    print_selected()   { printf "  $ESC[7m $1 $ESC[27m"; }
    get_cursor_row()   { IFS=';' read -sdR -p $'\E[6n' ROW COL; echo ${ROW#*[}; }
    key_input()        { read -s -n3 key 2>/dev/null >&2
                         if [[ $key = $ESC[A ]]; then echo up;    fi
                         if [[ $key = $ESC[B ]]; then echo down;  fi
                         if [[ $key = ""     ]]; then echo enter; fi; }

    # initially print empty new lines (scroll down if at bottom of screen)
    for opt; do printf "\n"; done

    # determine current screen position for overwriting the options
    local lastrow=`get_cursor_row`
    local startrow=$(($lastrow - $#))

    # ensure cursor and input echoing back on upon a ctrl+c during read -s
    trap "cursor_blink_on; stty echo; printf '\n'; exit" 2
    cursor_blink_off

    local selected=0
    while true; do
        # print options by overwriting the last lines
        local idx=0
        for opt; do
            cursor_to $(($startrow + $idx))
            if [ $idx -eq $selected ]; then
                print_selected "$opt"
            else
                print_option "$opt"
            fi
            ((idx++))
        done

        # user key control
        case `key_input` in
            enter) break;;
            up)    ((selected--));
                   if [ $selected -lt 0 ]; then selected=$(($# - 1)); fi;;
            down)  ((selected++));
                   if [ $selected -ge $# ]; then selected=0; fi;;
        esac
    done

    # cursor position back to normal
    cursor_to $lastrow
    printf "\n"
    cursor_blink_on

    return $selected
}

# Main script starts here #

clear
echo "Select one option to start, stop or delete docker containers:"
echo "-------------------------------------------------------------"
echo
select_option "${MENU[@]}"
menu_result=$?
exec_choice $menu_result
