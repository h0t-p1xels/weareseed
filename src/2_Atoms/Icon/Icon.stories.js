/*
 * Icon Atom Component Story
 *
 */

import React from "react"
import Component from "./Icon"

export default {
    title: "Atoms/Icon",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: "Icon component.",
            },
        },
    },
    // argTypes: {
        // text: {
        //     description: "Icon text",
        //     defaultValue: "Icon",
        // },
        // modifier: {
        //     description: "Modifier options",
        //     control: {
        //         type: "select",
        //         labels: {
        //             "": "no modifier",
        //         },
        //     },
        // },
    // },
}

export const Icon = args => <Component {...args} />
