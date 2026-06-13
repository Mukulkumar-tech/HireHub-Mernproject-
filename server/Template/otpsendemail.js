

export  const otpemail = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Your HireHub verification code</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f5f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:15px;color:#1a1a2e;-webkit-font-smoothing:antialiased;">

  <!-- Outer wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f5f7;padding:40px 16px;">
    <tr>
      <td align="center">

        <!-- Email container -->
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;background-color:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e2e5ec;">

          <!-- Header -->
          <tr>
            <td style="background-color:#1a1a2e;padding:24px 32px;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="vertical-align:middle;">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="width:32px;height:32px;background-color:#4f6ef7;border-radius:8px;text-align:center;vertical-align:middle;">
                          <img src="https://img.icons8.com/ios-filled/50/ffffff/briefcase.png" width="18" height="18" alt="" style="display:block;margin:auto;" />
                        </td>
                        <td style="padding-left:10px;font-size:19px;font-weight:600;color:#ffffff;letter-spacing:-0.3px;">
                          Hire<span style="color:#4f6ef7;">Hub</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 32px 24px;">

              <!-- Greeting -->
              <p style="margin:0 0 8px;font-size:14px;color:#6b7280;">Hello, {{user_name}} 👋</p>

              <!-- Headline -->
              <h1 style="margin:0 0 14px;font-size:21px;font-weight:600;color:#1a1a2e;line-height:1.35;">Verify your identity to continue</h1>

              <!-- Body text -->
              <p style="margin:0 0 24px;font-size:14px;color:#6b7280;line-height:1.75;">
                We received a request to sign in to your HireHub account. Use the one-time code below to complete verification. This code is valid for a single use only. Do not share it with anyone.
              </p>

              <!-- OTP Block -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
                <tr>
                  <td style="background-color:#f0f3ff;border:1.5px dashed #4f6ef7;border-radius:10px;padding:20px 24px;text-align:center;">
                    <p style="margin:0 0 10px;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#4f6ef7;font-weight:600;">Your one-time code</p>
                    <p style="margin:0;font-family:'Courier New',Courier,monospace;font-size:38px;font-weight:700;color:#1a1a2e;letter-spacing:12px;padding-left:12px;line-height:1;">OTPCODE</p>
                    <p style="margin:10px 0 0;font-size:12px;color:#4f6ef7;">&#x23F1; Expires in 10 minutes</p>
                  </td>
                </tr>
              </table>

              <!-- Warning -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:24px;">
                <tr>
                  <td style="background-color:#fffbeb;border-left:3px solid #e8a020;border-radius:0 8px 8px 0;padding:12px 16px;font-size:13px;color:#92600a;line-height:1.6;">
                    &#x26A0;&#xFE0F;&nbsp; If you did not request this code, your account may be at risk.
                    <a href="{{secure_account_url}}" style="color:#e8a020;font-weight:500;text-decoration:none;">Secure your account &rarr;</a>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:18px;">
                <tr>
                  <td style="height:1px;background-color:#e9eaf0;font-size:0;line-height:0;">&nbsp;</td>
                </tr>
              </table>

              <!-- Footer note -->
              <p style="margin:0;font-size:12px;color:#9ca3af;line-height:1.75;">
                This email was sent to <strong style="color:#374151;">{{user_email}}</strong>.
                If you did not initiate this request, you can safely ignore this message.
                For help, contact us at <a href="mailto:support@hirehub.io" style="color:#4f6ef7;text-decoration:none;">support@hirehub.io</a>.
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f8f9fb;border-top:1px solid #e9eaf0;padding:16px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="font-size:12px;font-weight:500;color:#9ca3af;">&copy; 2026 HireHub. All rights reserved.</td>
                  <td align="right">
                    <a href="{{privacy_url}}" style="font-size:12px;color:#4f6ef7;text-decoration:none;margin-left:16px;">Privacy</a>
                    <a href="{{terms_url}}" style="font-size:12px;color:#4f6ef7;text-decoration:none;margin-left:16px;">Terms</a>
                    <a href="{{unsubscribe_url}}" style="font-size:12px;color:#4f6ef7;text-decoration:none;margin-left:16px;">Unsubscribe</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
        <!-- /Email container -->

      </td>
    </tr>
  </table>
  <!-- /Outer wrapper -->

</body>
</html>`