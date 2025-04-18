import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";

test('Current year', () => {
    const result = getFullYear();
    const currentYear = new Date().getFullYear();
    expect(result).toBe(currentYear);
});

test('Webpage footer when true', () => {
    const result = getFooterCopy(true);
    const footerString = 'Holberton School';
    expect(result).toBe(footerString);
});

test('Webpage footer when false', () => {
    const result = getFooterCopy(false);
    const footerString = 'Holberton School main dashboard';
    expect(result).toBe(footerString);
});

test('Notification', () => {
    const result = getLatestNotification();
    const notificationString = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(result).toBe(notificationString);
});
