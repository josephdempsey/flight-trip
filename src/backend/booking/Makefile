PROFILE := "twitch"
SHARED_LIBS_LAYER ?= "arn:aws:lambda:eu-west-1:363321665306:layer:ProjectSharedLibs:1"

target:
	@$(MAKE) pr

dev:
	pipenv install

format:
	pipenv run isort -rc .
	pipenv run black src
	pipenv run black tests

lint: format
	pipenv run flake8

test:
	pipenv run pytest

test-html:
	pipenv run pytest --cov-report html

pr: lint test

invoke-cancel-booking:
	sam local invoke \
		--event src/cancel-booking/event.json \
		--env-vars local-env-vars.json CancelBooking \
		--parameter-overrides SharedLibsLayer=${SHARED_LIBS_LAYER} \
		--profile ${PROFILE}

invoke-confirm-booking:
	sam local invoke \
		--event src/confirm-booking/event.json \
		--env-vars local-env-vars.json ConfirmBooking \
		--parameter-overrides SharedLibsLayer=${SHARED_LIBS_LAYER} \
		--profile ${PROFILE}

invoke-notify-booking:
	sam local invoke \
		--event src/notify-booking/event.json \
		--env-vars local-env-vars.json NotifyBooking \
		--parameter-overrides SharedLibsLayer=${SHARED_LIBS_LAYER} \
		--profile ${PROFILE}

invoke-reserve-booking:
	sam local invoke \
		--event src/reserve-booking/event.json \
		--env-vars local-env-vars.json ReserveBooking \
		--parameter-overrides SharedLibsLayer=${SHARED_LIBS_LAYER} \
		--profile amplify-user-joe

deploy: ##=> Deploy booking service using SAM
# [24-07-2020] Changed from `sam deploy` to `aws cloudformation deploy`
# known issue: https://github.com/awslabs/aws-sam-cli/issues/1698
	$(info [*] Packaging and deploying Booking service...)
	sam package \
		--s3-bucket amplify-flighttrip-dev-152829-deployment \
		--output-template-file packaged.yaml && \
	sam deploy \
		--template-file packaged.yaml \
		--stack-name flighttrip-booking-dev \
		--parameter-overrides \
			BookingTable=/dev/service/amplify/storage/table/booking \
			FlightTable=/dev/service/amplify/storage/table/flight \
			CollectPaymentFunction=/dev/service/payment/function/collect \
			RefundPaymentFunction=/dev/service/payment/function/refund \
			AppsyncApiId=/dev/service/amplify/api/id \
			Stage=dev \
			SharedLibsLayer=/dev/shared/lambda/layers/projectArn \
			--capabilities CAPABILITY_IAM

delete: ##=> Delete booking service
	aws cloudformation delete-stack --stack-name $${STACK_NAME}-booking-dev
