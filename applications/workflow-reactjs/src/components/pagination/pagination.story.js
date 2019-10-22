'use strict'

import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Pagination from './index'

const stories = storiesOf('<Pagination />', docule)

stories.add('without props', () => (
    <Pagination />
))