<template>
     <button class="v-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <v-icon class="loading icon" v-if="loading" name="i-loading"></v-icon>
        <v-icon class="icon" v-if="icon && !loading" :name="icon"></v-icon>
        <div class="content">
          <slot></slot>
        </div>
     </button>
</template>
<script>
export default {
    props:{
        icon:{},
        loading:{
            type:Boolean,
            default: false
        },
        iconPosition: {
            type : String,
            default: 'left',
            validator(value) {
                return value === 'left' || value === 'right';
                // return !(value !== 'left' && value !== 'right');
                // if(value !== 'left' && value !=='right' ){
                //     return false;
                // } else{
                //     return true;
                // }
            }
        }
    }
}
</script>
<style lang="scss">
    @keyframes spin {
        0%{transform: rotate(0deg);}
        30%{transform: rotate(30deg);}
        60%{transform: rotate(90deg);}
        100%{transform: rotate(360deg);}
    }
     .v-button{
            font-size: var(--font-size);
            height: var(--button-height);
            padding: 0 1em;
            border-radius: var(--border-radius);
            border: 1px solid var(--border-color);
            background:var(--button-bg);
            display: inline-flex;
            justify-self: center;
            align-items: center;
            vertical-align: middle;
            &:hover{
                border-color: var(--border-color-hover);
            }
            &:active{
                background-color: var(--button-active-bg);
            }
            &:focus {
                outline: none;
            }
            > .content{
                order: 2;
            }
            > .icon{
                order: 1;
                margin-right: 0.2em;
            }
            &.icon-right{
                > .content{
                    order: 1;
                }
                > .icon{
                    order:2;
                    margin-right: 0;
                    margin-left: 0.2em;
                }
            }
            .loading{
                animation: spin 1s infinite linear;
            }
        }
        
</style>