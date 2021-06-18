PROFILE := "twitch"
SHARED_LIBS_LAYER ?= "arn:aws:lambda:eu-west-1:231436140809:layer:ProjectSharedLibs:2"

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

invoke-collect-payment:
	sam local invoke \
		--event src/collect-payment/event.json \
		--env-vars local-env-vars.json CollectPayment \
		--parameter-overrides SharedLibsLayer=${SHARED_LIBS_LAYER} \
		--profile ${PROFILE}

invoke-refund-payment:
	sam local invoke \
		--event src/refund-payment/event.json \
		--env-vars local-env-vars.json RefundPayment \
		--parameter-overrides SharedLibsLayer=${SHARED_LIBS_LAYER} \
		--profile ${PROFILE}

deploy: ##=> Deploy payment service using SAM
# [24-07-2020] Changed from `sam deploy` to `aws cloudformation deploy`
# known issue: https://github.com/awslabs/aws-sam-cli/issues/1698
	$(info [*] Packaging and deploying Payment service...)
	sam package \
		--s3-bucket amplify-flighttrip-dev-152829-deployment \
		--output-template-file packaged.yaml && \
	sam deploy \
		--template-file packaged.yaml \
		--stack-name amplify-flighttrip-payment-dev \
		--capabilities CAPABILITY_IAM CAPABILITY_AUTO_EXPAND \
		--parameter-overrides \
			Stage=dev \
			SharedLibsLayer=/dev/shared/lambda/layers/projectArn

delete: ##=> Delete payment service
	aws cloudformation delete-stack --stack-name $${STACK_NAME}-payment-dev
