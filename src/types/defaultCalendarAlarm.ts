/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

export type DefaultCalendarAlarmAction = 'DISPLAY' | 'EMAIL'

export type DefaultCalendarAlarm = {
	trigger: number
	action: DefaultCalendarAlarmAction
}